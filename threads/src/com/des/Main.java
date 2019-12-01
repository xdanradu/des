package com.des;

public class Main {

    private static final String FIRST_FILE="first.txt";
    private static final String SECOND_FILE="second.txt";

    public static void main(String[] args) throws InterruptedException {
        System.out.println("Application start");
        init();

        Thread firstThread = new Process(FIRST_FILE);
        Thread secondThread = new Process(SECOND_FILE);

        firstThread.start();
        secondThread.start();

        firstThread.join();
        secondThread.join();

        printCurrentValues();
        System.out.println("Application finish");
    }

    private static void init(){
        FileManager.write(FIRST_FILE, "0");
        FileManager.write(SECOND_FILE, "0");
    }

    private static void printCurrentValues(){
        String first = FileManager.read(FIRST_FILE);
        String second = FileManager.read(SECOND_FILE);
        System.out.println("Read current values: First="+first+" Second="+second);
    }
}
