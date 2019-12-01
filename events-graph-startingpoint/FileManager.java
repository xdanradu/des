import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;


public class FileManager {
    public static void write(String fileName, String value){
        try (PrintWriter out = new PrintWriter(fileName)) {
            out.println(value);
            out.close(); 
        } catch(FileNotFoundException e){
            System.out.println(e.getMessage());
        }
    }
    public static String read(String fileName){
        String result = "";
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName));) {
			
			result = reader.readLine();
			reader.close();
        } catch(IOException e){
            System.out.println(e.getMessage());
        }
        return result;
    }
}