package com.des;

import java.util.Random;

public class Process extends Thread {

    private String fileName;

    public Process(String fileName){
        this.fileName = fileName;
    }

    public void run(){
        String value = readExistingValue();
        writeNewValue(value);

    }

    private String readExistingValue(){
        String value="";
        System.out.println("Start reading from "+this.fileName);
        long startTime = System.nanoTime();
        value = FileManager.read(this.fileName);
        long endTime = System.nanoTime();
        long timeElapsedInMicroS = (endTime - startTime) / 1000;
        System.out.println("Stop reading from "+this.fileName + "operation duration: "+timeElapsedInMicroS+" microS");
        return value;
    }

    private void writeNewValue(String value){
        Random rand = new Random();
        int randomNumber = rand.nextInt(100);
        System.out.println("Start writing to "+this.fileName);
        long startTime = System.nanoTime();
        FileManager.write(this.fileName, value + ", " +randomNumber);
        long endTime = System.nanoTime();
        long timeElapsedInMicroS = (endTime - startTime) / 1000;
        System.out.println("Stop writing to "+this.fileName+", operation duration: "+timeElapsedInMicroS+" micros");
    }

}
