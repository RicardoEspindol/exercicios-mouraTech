namespace GitComands.Models;

public class Commands
{
    public string? Command { get; set; }
    public string? Description { get; set; }
}


 Commands = new List<Command>
        {
            new Commands { Instruction = "git status", Description="Checa o status" },
            new Commands { Instruction = "git add [nome-arquivo.txt]", Description="Adiciona um arquivo para área de stage" },
            new Commands { Instruction = "git commit -m [Mensagem de Commit]", Description="Comita as alterações" },
            new Commands { Instruction = "git rm -r [nome-arquivo.txt]", Description="Remove um arquivo (ou pasta)" },
            new Commands { Instruction = "git branch", Description="Lista as branches (o asterisco denota a branch atual)" },
            new Commands { Instruction = "git branch -a", Description="Lista todas as branches (local e remoto)" },
            new Commands { Instruction = "git branch [nome da branch]", Description="Cria uma nova branch" },
            new Commands { Instruction = "git branch -d [nome da branch]", Description="Deleta uma branch" },
            new Commands { Instruction = "git push origin --delete [nome da branch]", Description="Deleta uma branch remota" },
            new Commands { Instruction = "git checkout -b [nome da branch]", Description="Cria uma nova branch e muda para ela" },
            new Commands { Instruction = "git checkout -b [nome da branch] origin/[nome da branch]", Description="Clona uma branch remota e muda para ela" },
            new Commands { Instruction = "git checkout [nome da branch]", Description="Seleciona uma branch" },
            new Commands { Instruction = "git checkout -", Description="Muda para a última branch" },
            new Commands { Instruction = "git checkout -- [nome-arquivo.txt]", Description="Descarta modificações de um arquivo" },
            new Commands { Instruction = "git merge [nome da branch]", 
                        Description="Faz um merge de uma branch na branch atual" },



            
           
        };