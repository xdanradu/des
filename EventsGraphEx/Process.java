import java.util.Random; 

public class Process extends Thread {
    private String fileName;

    public Process(String fileName){
        this.fileName = fileName;
    }

    public void run(){

        int existingNumber = readFromFile();

        writeToFile(new Random().nextInt(100)-existingNumber);

    }

    public int readFromFile(){
        int value=0;
        System.out.println("Start reading from "+this.fileName);
        value = Integer.parseInt(FileManager.read(this.fileName));
        System.out.println("End reading from "+this.fileName);
        return value;
    }

    public void writeToFile(int number){
        System.out.println("Start writing to "+this.fileName);
        FileManager.write(fileName, number+"");
        System.out.println("End writing to "+this.fileName);
    }
}