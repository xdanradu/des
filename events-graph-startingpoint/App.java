public class App {
    static final String FIRST_FILE="first.txt";
    static final String SECOND_FILE="second.txt";

    public static void main(String[] args) throws InterruptedException{
    
        System.out.println("Start application");

        Process firstProcess = new Process(FIRST_FILE);
        Process secondProcess = new Process(SECOND_FILE);

        firstProcess.start();
        secondProcess.start();

        firstProcess.join();
        secondProcess.join();

        printValues();

        System.out.println("Finish application");   
    }

    private static void printValues(){
        String firstValue = FileManager.read("first.txt");
        String secondValue = FileManager.read("second.txt");
        System.out.println("First="+firstValue+ " Second="+secondValue);
    }
}