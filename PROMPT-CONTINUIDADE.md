# Prompt de continuidade — projeto Flexa 3D

Continue o trabalho neste projeto sem fazer perguntas desnecessárias:

`C:\Users\435464624\Documents\projeto-flexa\Trabalho-do-sor-Flexa-3d`

## Contexto e regra do usuário

O usuário começou com a instrução “não altere nada pelo amor de Deus”. Depois autorizou explicitamente mudanças pontuais nas máquinas MPS. Não altere outros módulos ou funcionalidades sem necessidade. Não crie commits nem envie código para o remoto sem autorização.

O projeto é uma aplicação Vite + JavaScript ES modules + Three.js. Os comandos disponíveis são:

- `npm run dev`
- `npm run build`
- `npm run preview`

## Alterações já realizadas

### 1. Layout das estações

As duas antigas estações de armazenamento foram substituídas por uma separadora de peças/esteira e uma estação de teste. As esteiras foram separadas para não ficarem lado a lado.

Layout final em `src/stations.js`:

- Linha direita, `rightTypes` / `rightKinds`:
  - MPS-01: distribuição
  - MPS-02: teste
  - MPS-03: processamento
  - MPS-04: montagem
  - MPS-05: teste
  - MPS-06: transferência/esteira
- Linha esquerda, `leftTypes` / `leftKinds`:
  - MPS-07: distribuição
  - MPS-08: teste
  - MPS-09: montagem
  - MPS-10: transferência/esteira

Posições verificadas anteriormente:

- MPS-06: `{ x: 2, z: 2.7 }`
- MPS-10: `{ x: -2, z: -3 }`
- MPS-05: `{ x: 2, z: 1.62 }`

### 2. Estação de teste realista

A estação de teste foi refeita em `src/stations.js`, na função `buildTest`, com:

- Estrutura C arredondada, pés, reforços, slots em T e faixa de perigo.
- Cilindro pneumático com faixa azul e hastes cromadas.
- Cabeçote móvel nomeado `test-press-head`.
- Fixture detalhado com pinos e parafusos.
- Sensores, fim de curso, FRL, válvula, eletrodutos e mangueiras.
- Controle animado do cabeçote e dos LEDs.

As três estações de teste (MPS-02, MPS-05 e MPS-08) foram verificadas com 108 meshes e animação correta.

### 3. Peça da estação de teste

A peça genérica foi substituída por uma bucha usinada em `createTestBushing`, com:

- Corpo em aço.
- Camisa interna cromada.
- Aro escuro no furo.
- Anel azul de referência.
- Anel usinado cromado.
- Três furos simulados com aros cromados.

O defeito visual de “buraco preto” no fundo da bucha foi corrigido. A causa era o fundo escuro do furo visto em ângulo baixo, não normais invertidas.

### 4. Célula de montagem MPS-04/MPS-09

A função `buildAssembly`, em `src/stations.js`, foi amplamente refeita. O código atual já contém:

- `createAssemblyBase`: base da peça com corpo, inserto, anel cromado e encaixe rosa.
- `createAssemblyCap`: tampa rosa com aro laranja, base metálica e guia cromada.
- Estrutura arredondada com colunas, reforços, porcas, viga superior e faixa de perigo.
- Alimentador vertical e shuttle linear independentes.
- Prensa vertical com guias.
- Magazine transparente com cinco bases e magazine independente com cinco tampas.
- Alimentador da base com dois cilindros pneumáticos e cabeçotes nos eixos X e Z. A haste longa do eixo X fica recolhida dentro do corpo em repouso e se expõe progressivamente durante a alimentação, evitando que atravesse visualmente a IHM.
- Fixture com pinos de posicionamento.
- Expulsor lateral com pá.
- Bandeja de saída.
- Sensores de base, tampa e shuttle.
- Fim de curso, FRL, duas válvulas, cabos e mangueiras.
- Torre de sinalização.

Lógica atual do controlador:

1. Retira uma base do magazine com o alimentador de dois eixos.
2. Move a base por X até o centro e por Z até o ninho de prensa.
3. Transfere uma tampa do magazine para o shuttle.
4. Abaixa a tampa e a posiciona sobre a base.
5. Prensa e verifica a montagem.
6. Expulsa o conjunto pronto para a bandeja e cria uma cópia final.
7. Consome uma base e uma tampa por ciclo.
8. Após cinco ciclos, mostra `MAGAZINE VAZIO` e retorna `stop`, interrompendo o programa.
9. `reset()` repõe as cinco bases e as cinco tampas, remove as peças finalizadas e zera todos os atuadores.
10. `setHmi()` atualiza as mensagens: `CARREGANDO BASE`, `ALIMENTANDO`, `POSICIONANDO`, `PRENSANDO`, `VERIFICANDO`, `EXPULSANDO`.
11. Retorna `persistResult: true`.

O bloco de programação `assemble` em `src/blocklab.js` foi atualizado:

- Duração: `5.2` segundos.
- Descrição e dica explicam o magazine de bases, o alimentador de dois eixos, o magazine de tampas, shuttle, prensa, expulsor e parada por magazine vazio.

`INFO.assembly` em `src/stations.js` também foi atualizado com a nova descrição, tecnologias e dica.

### 5. Física das cadeiras

As sete cadeiras do escritório agora possuem física leve em `src/props.js`, sem novas dependências:

- `buildProps()` coleta e retorna todas as cadeiras em `chairs`.
- `ChairPhysics` mantém velocidade linear XZ, velocidade angular Y, atrito exponencial e repouso.
- As cadeiras colidem com paredes, bancadas e demais obstáculos estáticos através de `navigation.js`.
- Há colisão entre cadeiras, com separação e troca de impulso.
- O contato com o jogador empurra a cadeira no modo caminhada e na VR; teleportes não geram impulso artificial.
- Um clique na cadeira ou `E` com a mira sobre ela aplica impulso e torque conforme o ponto de contato.
- Os rodízios giram na direção do movimento.
- A cadeira usada no modo sentado fica travada e é liberada ao sair; a câmera acompanha pequenos deslocamentos da cadeira.
- `ChairPhysics.reset()` restaura posição, rotação, rodízios e velocidades.

A integração está em `src/main.js`:

- Clique, hover e mira reconhecem as hitboxes das cadeiras sem substituir os raycasts de HMI, monitores e estações.
- A física é atualizada após `walk.update()` ou `vr.update()`, fora do bloco de pausa da simulação.
- `src/vr.js` expõe `getPlayerPosition()` para alimentar o contato físico com o jogador.

### 6. Robô industrial e roteamento da mangueira

O robô foi remodelado em `src/robot.js` para reduzir o aspecto de peças simples justapostas:

- Elos fundidos e afilados, com painéis laterais, faixas azuis, parafusos, placas e presas.
- Juntas industriais com rolamentos, carcaças, anéis, tampas, motores e aberturas de ventilação.
- Pedestal com base grafite, corpo branco, aro azul, rolamentos e oito parafusos de ancoragem.
- Seis eixos representados por A1–A6; A5 e A6 permanecem em zero sem comando, sem rotação automática do punho ou da ferramenta.
- A1 usa sempre o menor arco entre orientações, evitando saltos de ±π.
- A trajetória automática passa por um ponto de desvio à frente da base, e o programa do pendant insere esse desvio automaticamente quando o movimento linear cruza a área do pedestal.
- O perfil de movimento tem aceleração e desaceleração controladas, e o slot do pallet só avança depois que o robô conclui a retirada da bandeja.
- Garra paralela com corpo arredondado, carros móveis, dedos metálicos, pastilhas de borracha, mangueiras curtas e LED.
- Torre de sinalização sincronizada com os modos automático, programa e limpeza.
- A antiga mangueira azul que cruzava o centro da célula foi removida. O novo feixe preto e azul passa pela traseira esquerda, sobe pelo poste e é fixado próximo ao teto.
- O feixe possui presas, gland na base e um loop curto de flexão ligado à torre.
- A API de depuração inclui `getAxisState()`, `getCablePath()`, `getGrip()` e `getProgramState()`.
- A pilha de alimentação, o ninho, as seis bandejas e o pallet receberam nomes estáveis para inspeção.

Validação do robô:

- Dois ciclos automáticos foram amostrados em 817 estados após os ajustes finais.
- A distância mínima medida entre a ponta da ferramenta e o feixe de serviços foi de `0,2303 m`.
- A5 e A6 permaneceram exatamente em `0 rad` durante todo o teste.
- A maior variação de A1 em um quadro foi de `0,0635 rad`, sem giro completo ou salto de volta.
- A folga mínima da ponta da ferramenta até o centro do pedestal foi de `0,4150 m`.
- A ponta da ferramenta variou entre `y = 0,981 m` e `y = 1,55 m`.
- O programa do pendant com mover, pegar, mover e soltar foi concluído com uma bandeja transferida diretamente para o pallet e cinco bandejas visíveis na alimentação.
- No programa, a maior variação de A1 em um quadro foi de `0,0316 rad` e a folga mínima até o pedestal foi de `0,3959 m`.
- A comparação visual antes/depois confirmou o aumento de detalhe e a retirada da mangueira da região central.
- Não há erros de console da aplicação; restam somente os dois avisos preexistentes do `RoomEnvironment`.

### 7. Interface responsiva e controles de toque

O pedido “deixe responsivo para qualquer aparelho que for utilizado” foi atendido sem alterar o funcionamento das estações ou do robô:

- `index.html` usa `viewport-fit=cover` e inclui o joystick, os botões Correr/Interagir e dicas próprias para toque.
- `src/styles.css` usa `100dvh`, safe areas do aparelho, layouts para celulares/tablets, paisagem baixa e áreas de toque maiores.
- O botão Caminhar continua acessível no celular; no modo caminhada, o joystick fica à esquerda e Correr/Interagir à direita.
- `src/walk.js` detecta `pointer: coarse` e telas estreitas, evita pointer lock no toque, aceita arraste para olhar e normaliza o movimento analógico do joystick.
- O botão Correr funciona por pressão contínua; Interagir usa a mira central para HMI, monitores, estações e cadeiras.
- `src/main.js` ajusta canvas, câmera, rótulos e raycasts ao `visualViewport`, com pixel ratio e FOV adaptativos para retrato.
- `src/blocklab.css` mantém paleta, lista de blocos, ações e informações utilizáveis no celular e na paisagem baixa.
- `src/devstudio.css` adapta editor, terminal, barra de atividades e guia a safe areas e telas pequenas.

Validação responsiva:

- Build de produção concluído sem erros.
- Cena carregou no navegador com `window.__lab` disponível e sem erros de console.
- O joystick moveu o jogador `0,95 m` em `0,5 s`; o botão Correr elevou o deslocamento para `1,70 m` no mesmo intervalo.
- O estado `aria-pressed` de Correr mudou para `true` ao pressionar e voltou para `false` ao soltar.
- O pointer lock permaneceu desativado no toque e os controles foram ocultados ao sair do modo caminhada.
- Os layouts de 320×568, 375×667, 390×844, 768×1024, 844×390 e 667×375 não apresentaram vazamento da barra superior, toolbar, indicadores ou navegação.
- O navegador automatizado disponível usa viewport reduzida; por isso, a validação completa dos painéis móveis foi feita pelas regras de layout, além da abertura funcional no viewport disponível.
- Restam somente os dois avisos preexistentes do `RoomEnvironment` e o aviso não fatal de chunk maior que 500 kB.

### 8. Magazine lateral das esteiras

O pedido “para a esteira quero que tenha uma magazine do lado dela com as peça que ela vai transportar” foi atendido em MPS-06 e MPS-10. O magazine quadriculado inicial foi substituído por três tubos transparentes verticais, seguindo o modelo visual do magazine da estação de distribuição.

O pedido posterior “agora faz as peças saírem uma por vez da magazine e irem para a esteira” refinou o funcionamento em `buildConveyorStation`, em `src/stations.js`:

- Os três tubos foram alinhados no eixo Z, com três peças por material: uma metálica, uma plástica colorida e uma preta em cada tubo.
- Cada tubo possui abertura lateral em +X para a retirada pela base; a primeira peça visível é sempre a peça inferior.
- A retirada esconde a peça da base e anima a descida das peças superiores em `29 mm`, com duração de `0,14 s`.
- Há uma calha individual por tubo, evitando que uma peça atravesse o magazine vizinho.
- Um alimentador lateral conduz a peça até a entrada da esteira, na mesma altura da correia principal.
- A trilha lateral esquerda da esteira foi aberta na entrada e uma ponte de transferência liga o alimentador à correia.
- O controlador permite somente uma transferência por vez. A peça percorre uma curva Catmull-Rom e reutiliza a mesma malha do pool ao chegar à esteira.
- O contador de peças alimentadas somente aumenta quando a transferência termina; não há consumo antecipado do lote.
- O reset interrompe a transferência, limpa as descidas pendentes, restaura as oito peças no magazine e coloca a nona peça metálica na entrada da esteira.
- Nomes estáveis: `MPS-06-conveyor-magazine`, `MPS-10-conveyor-magazine`, `MPS-06-conveyor-infeed`, `MPS-10-conveyor-infeed` e `MPS-06-magazine-metal-1` / `MPS-10-magazine-black-3`, entre outros.
- `INFO.conveyor` e a dica do bloco `belt` em `src/blocklab.js` explicam a retirada sequencial, a descida das pilhas e o alimentador lateral.

Validação dos magazines e da transferência:

- MPS-06 e MPS-10 começaram com oito peças no magazine e uma na esteira, totalizando nove.
- Durante todos os ciclos testados, o número máximo de peças fora do magazine e ainda em transferência foi `1`.
- Após a retirada da base colorida, as duas peças superiores desceram de `0,056/0,085 m` para `0,027/0,056 m`.
- O reset no meio de uma transferência devolveu o magazine para oito peças, deixou uma peça na esteira e removeu qualquer peça em trânsito.
- A folga mínima medida da peça em relação aos tubos adjacentes foi `20,99 mm`.
- A folga mínima medida até o posto do sensor indutivo foi `27,74 mm`.
- A peça ficou alinhada à altura da lateral da esteira, sem penetração na estrutura.
- O ciclo completo consumiu as nove peças, separou todas nas rampas e terminou com `LOTE CONCLUÍDO`.
- O reset final restaurou oito peças no magazine, uma na esteira, zero nas rampas e nenhuma transferência ativa.
- Capturas headless confirmaram as aberturas dos tubos, as calhas, o alimentador, a ponte e a entrada nas duas células.
- Não há erros de console da aplicação; restam somente os avisos preexistentes do `RoomEnvironment`.

Correção do retorno da esteira:

- O salto instantâneo de `z = -0,42 m` para `z = 0,40 m` foi substituído por um percurso contínuo sob a correia.
- O retorno usa duas curvas Bézier cúbicas e uma linha, descendo até `y = 0,037 m` e voltando à altura da correia sem descontinuidade de posição.
- Uma faixa de borracha sob a correia serve de apoio ao retorno.
- Sensores e seleção das rampas ignoram a peça enquanto ela percorre o retorno inferior.
- MPS-06 e MPS-10 completaram dois retornos sem saltos; o maior deslocamento medido por atualização foi `0,646 mm` para um avanço de correia de `0,625 mm`.
- A triagem completa continuou terminando com nove peças nas rampas, zero na esteira e `LOTE CONCLUÍDO`.
- O reset durante o retorno inferior restaurou oito peças no magazine e uma na entrada da esteira.

Ajuste físico das peças nas rampas:

- As três rampas foram rebaixadas para iniciar na altura da correia em `x = 0,12 m`.
- A peça acompanha a superfície inclinada durante a saída do cilindro, sem penetrar na rampa.
- O empilhamento nas rampas passou a usar passo de `29 mm`, deixando `1 mm` de folga sobre a altura total de `28 mm` da peça.
- A faixa colorida e as guias laterais foram reposicionadas junto à superfície da rampa.
- A folga mínima medida entre a peça e a rampa foi zero, sem penetração; a folga entre peças empilhadas foi `1 mm`.
- A distância mínima entre peças na esteira foi `107,22 mm`, superior ao diâmetro de `64 mm`.
- MPS-06 e MPS-10 concluíram o lote com nove peças nas rampas e `LOTE CONCLUÍDO`.

### 9. Upgrade visual das MPS-01 e MPS-07

Os pedidos “melhora está maquina também por favor” e “de um upgrad” foram atendidos nas duas estações de distribuição:

- `buildDistribution` recebeu um conjunto detalhado condicionado aos códigos `MPS-07` e `MPS-01`, nomeado `${code}-distribution-details`.
- O magazine tubular ganhou base parafusada, faixa de perigo, quatro tirantes cromados, porcas e fixações superiores.
- O tubo transparente ganhou uma abertura lateral em `-X`, alinhada com o cilindro de ejeção, para a peça sair sem atravessar o acrílico.
- Uma ponte de transferência com placas laterais e borracha liga a saída do magazine à calha de roletes.
- O cilindro de ejeção ganhou berços, suportes parafusados e haste compacta, recolhida em repouso.
- A calha acumuladora ganhou roletes escuros, guias de borracha, batente final, bases e sapatas aparafusadas.
- O conjunto pneumático ganhou placa de montagem e FRL com filtro, regulador, lubrificador e copo transparente.
- Um sensor de nível baixo acende em âmbar quando restam duas peças ou menos no magazine.
- As mangueiras azuis passaram a seguir curvas organizadas, e o cabo preto foi movido para calhas nas bordas da estação, eliminando o longo diagonal aparente da imagem anterior.
- A lógica de ejeção foi ajustada para a fila abrir espaço antes de a peça nova alcançar a calha: `queueAdvance = easeInOut(clamp01(push / 0.58))`.
- A peça ejetada sobe os `2 mm` necessários durante a transferência para apoiar sobre os roletes, sem degrau na entrada da calha.
- A acumulação, os sensores e a parada por magazine vazio foram preservados.

Validação das MPS-01 e MPS-07:

- A MPS-01 e a MPS-07 concluíram oito comandos de ejeção, com oito peças na calha e zero no magazine.
- O nono comando das duas máquinas retornou `MAGAZINE VAZIO`.
- O reset das duas máquinas restaurou oito peças no magazine e zero na calha.
- A distância horizontal mínima entre a peça ejetada e a primeira peça da fila foi `80 mm` em todos os ciclos, superior ao diâmetro de `72 mm`.
- As duas estações possuem o conjunto detalhado e o sensor de nível baixo.
- Capturas headless confirmaram a abertura lateral, a ponte de transferência, os roletes, o FRL, o sensor, o cabeamento organizado e a folga entre as peças nas duas máquinas.
- Não há erros de console da aplicação; restam somente os avisos preexistentes do `RoomEnvironment`.

### 9. Apoio e descida dos magazines da montadora

O pedido “está bugado”, com imagem da MPS-04, foi atendido em `buildAssembly`, em `src/stations.js`:

- As prateleiras dos magazines de bases e tampas foram elevadas para apoiar a face inferior das peças, sem suspensão aparente.
- As alturas iniciais foram unificadas em `BASE_MAG_Y = 0,076 m` e `CAP_MAG_Y = 0,176 m`, reutilizadas na criação, alimentação, animação, commit e reset.
- As pilhas remanescentes agora descem continuamente durante o ciclo: as bases entre `p = 0,12` e `p = 0,24`, e as tampas entre `p = 0,38` e `p = 0,50`.
- O commit preserva a posição já alcançada pela animação, eliminando o salto anterior no fim do ciclo.

Validação das MPS-04 e MPS-09 após a correção:

- A base inferior e a tampa inferior tocam as prateleiras com folga medida de zero, sem penetração.
- A segunda base e a segunda tampa desceram gradualmente durante o primeiro ciclo, sem reposicionamento instantâneo.
- A diferença de posição entre `p = 1` e o commit foi zero nos cinco ciclos das duas máquinas.
- MPS-04 e MPS-09 concluíram cinco ciclos, criaram cinco peças finalizadas e o sexto comando retornou `MAGAZINE VAZIO`.
- O reset restaurou cinco bases e cinco tampas nas alturas iniciais.
- A captura close-up confirmou as pilhas apoiadas e a aparência visual da montadora.
- Não há erros de console da aplicação; o aviso preexistente do `RoomEnvironment` permanece não fatal.

## Estado atual

- `npm run build` foi executado com sucesso após a validação final.
- Bundle final: `dist/assets/index-B0f7Bc_0.js`.
- O Vite mantém apenas o aviso não fatal de chunk maior que 500 kB.
- Não foi criado nenhum commit novo nesta sessão.
- O servidor de desenvolvimento foi reiniciado e está disponível em `http://127.0.0.1:5173`.
- A cena carrega corretamente com `window.__lab` disponível.
- MPS-04 e MPS-09 foram validadas visualmente e funcionalmente.
- Cada célula possui 260 meshes, cinco bases no magazine, cinco tampas no magazine, alimentador de base de dois eixos, escapador, alimentador vertical, shuttle, prensa e sensores.
- Todos os manômetros foram removidos das estações de teste e de montagem, incluindo ponteiros, textura Canvas e tubos de sustentação.
- O painel/controlador físico do robô foi removido de `src/robot.js`, incluindo monitor, botão de emergência e base amarela; o pendant IHM da célula foi mantido.
- O bug que impedia a cena de carregar foi corrigido: a inicialização agora chama `ctl.reset()`.
- O magazine de tampas foi deslocado para o lado e ganhou um escapador linear, evitando que a tampa atravesse o vidro ou a pilha e que o alimentador colida com as outras tampas.
- O magazine de bases tem painel transparente traseiro e laterais abertas para permitir a passagem da peça nos eixos X e Z.
- Os objetos das pilhas foram nomeados `assembly-magazine-base-N` e `assembly-magazine-cap-N` para facilitar depuração.
- As sete cadeiras possuem física, hitbox própria, colisão, atrito, giro dos rodízios e interação por clique, mira ou contato com o jogador.
- MPS-06 e MPS-10 possuem magazines laterais de nove peças, com retirada sequencial pela base, descida animada das pilhas, calhas individuais e alimentador lateral até a esteira.

## Validação concluída

Foram executados cinco ciclos completos em MPS-04 e MPS-09:

- Os dois magazines visíveis passaram de 5 para 4, 3, 2, 1 e 0 itens.
- Uma peça `assembly-finished-N` foi criada por ciclo, terminando com cinco peças na bandeja.
- O sexto comando retornou `stop: "MAGAZINE VAZIO"`.
- O reset restaurou as cinco bases e as cinco tampas, removeu as cinco peças finalizadas e zerou os atuadores.
- O alimentador da base moveu a peça de `x = -0.25` para `x = 0.02` e de `z = -0.16` para `z = -0.035`.
- O cabeçote X da base variou entre `x = -0.302` e `x = -0.032`.
- O cabeçote Z da base variou entre `z = -0.212` e `z = -0.087`.
- O alimentador vertical variou entre `y = 0.166` e `y = 0.236`.
- O escapador variou entre `x = -0.16` e `x = -0.02`, transferindo a tampa de `x = -0.12` para `x = 0.02`.
- A prensa variou entre `y = 0.153` e `y = 0.203`.
- O shuttle variou entre `z = -0.035` e `z = 0.045`.
- O conjunto foi expulsto até `x = -0.12` e permaneceu nessa posição até a criação da peça final.
- O HMI apresentou `CARREGANDO BASE`, `ALIMENTANDO`, `POSICIONANDO`, `PRENSANDO`, `VERIFICANDO`, `EXPULSANDO` e `MONTAGEM 1/5`.
- Foram geradas renderizações close-up da célula com a base carregada e com a prensa acionada.
- Não há erros de console da aplicação; restam somente os dois avisos preexistentes do `RoomEnvironment` sobre `sigmaRadians`.
- Os arquivos temporários de imagem foram removidos.

Validação adicional das cadeiras:

- As sete cadeiras foram encontradas nas posições previstas e permanecem com `y = 0`.
- Um impulso de `1,65` gerou movimento e desaceleração até velocidade zero.
- A cadeira permaneceu dentro dos limites caminháveis do piso ao ser empurrada contra a parede.
- Duas cadeiras sobrepostas foram separadas para uma distância segura.
- O contato do jogador gerou impulso na cadeira e corrigiu a sobreposição.
- Uma cadeira ocupada não aceita impulso nem se move.
- O clique sintético sobre a cadeira aplicou velocidade de `1,65`.
- `beginSit()` travou a cadeira correspondente e `setView()` liberou a ocupação.
- A captura visual confirmou a aparência e o deslocamento discreto de uma cadeira.
- Não há erros de console da aplicação; restam somente os avisos preexistentes do `RoomEnvironment`.

## Arquivos principais

- `src/stations.js`: layout, teste, bucha e montagem.
- `src/robot.js`: geometria industrial, seis eixos, garra, beacon e feixe de serviços externo.
- `src/props.js`: móveis, cadeiras e `ChairPhysics`.
- `src/main.js`: integração da física, raycasts, modo sentado e responsividade da cena.
- `src/walk.js`: caminhada por teclado e controles de toque.
- `src/styles.css`: HUD, painéis, safe areas e layouts responsivos.
- `src/blocklab.css`: Block Lab responsivo.
- `src/devstudio.css`: Dev Lab responsivo.
- `src/vr.js`: posição do jogador para contato físico na VR.
- `src/blocklab.js`: programação em blocos.
- `index.html`: viewport, dicas e controles de toque.
- `dist/`: build final regenerado.
- `PROMPT-CONTINUIDADE.md`: este registro.
- `node_modules/.vite/deps/*`: alterações automáticas do Vite; não são código-fonte e normalmente não devem ser commitadas.

## Se for necessário continuar depois

1. Abrir `http://127.0.0.1:5173`.
2. Usar `window.__lab.entries` para localizar MPS-04 e MPS-09.
3. Testar com:
   - `entry.programStep("assemble", p)`
   - `entry.programCommit("assemble")`
   - `entry.setProgramMode(true)` para resetar
   - `entry.setProgramMode(false)` para sair do modo programa
4. Executar `npm run build` após qualquer novo ajuste.
5. Revisar `git diff` antes de criar qualquer commit.

## Interface de depuração

Em desenvolvimento, `src/main.js` expõe `window.__lab` com:

- `scene`
- `camera`
- `controls`
- `renderer`
- `entries`
- `setView`
- `select`
- `closePanel`
- `openProgramPanel`
- `openBlockLab`
- `hmiHits`
- `robot`
- `chairs`
- `chairPhysics`
- outros utilitários
