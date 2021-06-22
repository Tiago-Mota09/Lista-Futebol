// salvar como DOM-p7.js

function Adicionar(){
	var nome = document.getElementById("nome").value
	//alert(nome)
  if(nome == "")
  {
    alert("O nome do jogador deve ser informado")
  }
  else
  {
    // Inserir nome informado na lista
    //Criar um novo objeto do tipo opção de lista
    var opcao = document.createElement("option")
    opcao.text = nome
    listaJogadores.add(opcao)
    var tamanho = listaJogadores.length
    listaJogadores.selectedIndex = (tamanho - 1)
    alert("Jogador " + nome + " Foi adicionado com sucesso.")
  }
}
function Remover(){
	var nome = document.getElementById("nome").value
	
	//alert(nome)
	if(nome=="")
	{
		alert("Nome do Jogador deve ser informado")
	}
	else
	{
		var itens = listaJogadores.length
		if(itens==0)
		{
			alert("Lista está vazia. Não tem o que remover.")
		}
		else
		{
			// proceder com a busca e remoção
			var achou = false // inicializa a variável com falso
			
			/*
				Rotina de Busca (loop) / Varrer a lista
				---------------------------------------
				
				Acessar todas as suas opções da lista 
				Uma de cada vez.
				
				Executar n = 0 até (tamanho-1) = última opção
				- Pego a opção da posição n de dentro da lista
				- Pego o texto desta opção
				- Comparo com nome informado
				
				=> Achou (é o jogador procurado)?
					-> Remover esta opção (n) da lista
					-> Aviso o usuário que o jogador foi removido
					-> Mudar a variável achou para true
					-> Sair do loop
			*/
			
			for(var n=0 ; n < itens ; n++ ) {
				// Pego a opção da posição n de dentro da lista
				var opcao = listaJogadores.options[n]
				
				if(nome == opcao.text)
				{
					// Achou (é o jogador procurado)
					// Remover esta opção (n) da lista
					listaJogadores.remove(n)
					
					// Aviso o usuário que o jogador foi removido
					alert("Jogador " + nome + " foi removido da lista.")
					
					// Mudar a variável achou para true
					achou = true
					
					// Sair do loop
					break
				}
			}
			// estou fora do loop
			// Ou achou ou não.
			// Se achou, já avise antes
			// Se não achou, aviso agora
			if(!achou){
				alert("Jogador "+ nome + " não encontrado na lista.")
			}
		}
	}
}
