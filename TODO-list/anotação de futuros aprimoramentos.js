/* ==========================================================
   FUTUROS APRIMORAMENTOS (ROADMAP DO PROJETO)
   ==========================================================

   📌 1) MELHORIAS SIMPLES
   ----------------------------------------------------------
   - Botão "Apagar tudo"
   - Botão "Apagar apenas tarefas concluídas"
   - Marcar tarefa como concluída ao pressionar Enter sobre ela
   - Impedir tarefas duplicadas (mesmo texto)

   📌 2) EXPERIÊNCIA DO USUÁRIO (UX)
   ----------------------------------------------------------
   - Animações ao adicionar / remover tarefas (CSS transitions)
   - Mensagem de "Lista vazia" quando não houver tarefas
   - Exibir contador separado:
        • Total
        • Concluídas
        • Restantes
   - Notificação de "Tarefa adicionada" (opcional)

   📌 3) FUNCIONALIDADES INTERMEDIÁRIAS
   ----------------------------------------------------------
   - Editar tarefa (duplo clique → transforma em input)
   - Reordenar tarefas com drag & drop (arrastar e soltar)
   - Botão de "Concluir todas"
   - Filtragem:
        • Todas
        • Ativas
        • Concluídas

   📌 4) LOCALSTORAGE (AVANÇADO)
   ----------------------------------------------------------
   - Salvar ordem das tarefas ao arrastar
   - Salvar preferência de tema (dark/light mode)
   - Salvar filtros selecionados (Ativas, Concluídas, Todas)
   - Criar backup automático (timestamp no localStorage)

   📌 5) MELHORIAS DE ACESSIBILIDADE (A11Y)
   ----------------------------------------------------------
   - aria-label e role para todos os botões
   - Foco automático no input após criar/deletar tarefa
   - Teclas de atalho:
        • Enter: adicionar tarefa
        • Delete: remover tarefa selecionada
   - Navegação por teclado entre tarefas (setas ↑↓)

   📌 6) ARQUITETURA E BOAS PRÁTICAS
   ----------------------------------------------------------
   - Trocar inline HTML por createElement (100% JavaScript)
   - Extrair funções em módulos separados (JS modular)
   - Padronizar classes CSS: BEM ou Utility
   - Criar um componente JS "Tarefa" (OOP ou Factory)

   📌 7) FEATURES PROFISSIONAIS (NÍVEL PRO)
   ----------------------------------------------------------
   - Usar IndexedDB para listas grandes (melhor que localStorage)
   - Múltiplas listas (tabs): trabalho, estudos, compras…
   - Exportar/importar as tarefas via JSON
   - Versão PWA (instalável como app)
   - Sincronizar com servidor (Node + banco)

   ==========================================================
   * Atualize esta lista conforme avançar no aprendizado! :)
   ==========================================================
*/