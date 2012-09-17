using System;
using System.Text;
using System.IO;
using System.Text.RegularExpressions;
using System.ComponentModel;

namespace GrabArtDeploy
{
    class Program
    {
        static void Main(string[] args)
        {
            new FileOperator("../entry.js").WriteAll(new Builder().Build(new FileOperator("main.js").ReadAll()));
            Console.ReadKey();
        }
    }

    class FileOperator 
    {
        const string PRE_PATH = "../../JS/";

        private string fileName;

        public FileOperator(string fileName)
        {
            this.fileName = fileName;
        }

        public string ReadAll() 
        {
            Console.WriteLine("->File `" + fileName + "` opened for reading.");
            return File.ReadAllText(PRE_PATH + fileName);
        }

        public void WriteAll(string text)
        {
            Console.WriteLine("->File `" + fileName + "` opened for writing.");
            File.WriteAllText(PRE_PATH + fileName, text);
        }
    }

    class Builder 
    {
        public string Build(string content)
        {
            MatchCollection matchCollection = Regex.Matches(content, @"\('\[([^']+)\]'\)");
            foreach (Match match in matchCollection) {
                Console.Write("Found matches: ");
                for (int i = 1; i < match.Groups.Count; i++)
                {
                    string module = match.Groups[i].Value;
                    Console.Write(module + " ");
                }
                Console.WriteLine();

                for (int i = 1; i < match.Groups.Count; i++)
                {
                    string module = match.Groups[i].Value;
                    string buildResult = Build(new FileOperator(module.Replace('.', '/') + ".js").ReadAll());
                    content = content.Replace("('[" + module + "]')", buildResult);
                }
            }
            
            return content;
        }
    }
}
