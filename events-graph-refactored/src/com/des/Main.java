package com.des;

import com.des.fileutils.EnhancedFileManager;
import com.des.fileutils.FileManager;
import com.des.fileutils.SimpleFileManager;

public class Main {

    private static final String FIRST_FILE="first.txt";
    private static final String SECOND_FILE="second.txt";

    public static void main(String[] args) throws InterruptedException {
        System.out.println("Application start");
        init();

        Thread firstThread = new Process(FIRST_FILE, new SimpleFileManager());
        Thread secondThread = new Process(SECOND_FILE, new EnhancedFileManager());

        firstThread.start();
        secondThread.start();

        firstThread.join();
        secondThread.join();

        printCurrentValues();
        System.out.println("Application finish");
    }

    private static void init(){
        FileManager fileManager = new SimpleFileManager();
        fileManager.write(FIRST_FILE, "{number=");
        fileManager.write(SECOND_FILE, "{number=");
    }

    private static void printCurrentValues(){
        FileManager fileManager = new EnhancedFileManager();
        String first = fileManager.read(FIRST_FILE);
        String second = fileManager.read(SECOND_FILE);
        System.out.println("Current values: First="+first+" Second="+second);
    }
}
