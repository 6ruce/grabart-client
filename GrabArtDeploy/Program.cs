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
            Match match = Regex.Match(content, @"\('\[(.+)\]'\)");
            Console.Write("Found matches: ");
            for (int i = 1; i < match.Groups.Count; i++) {
                string module = match.Groups[i].Value;
                Console.Write(module + " ");
                Build(new FileOperator(module.Replace('.','/') + ".js").ReadAll());
            }
            Console.WriteLine();
            return content;
        }
    }
}
