package com.des;

import com.des.fileutils.FileManager;
import com.des.timeutils.Stopwatch;

import java.util.Random;

public class Process extends Thread {

    private String fileName;
    private FileManager fileManager;
    private Stopwatch stopwatch;

    public Process(String fileName, FileManager fileManager){
        this.fileName = fileName;
        this.fileManager = fileManager;
        this.stopwatch = new Stopwatch();
    }

    public void run(){
        String value = readValue();
        writeValue(value);
    }

    private String readValue(){
        String value="";
        logStart("READING");
        this.stopwatch.start();
        value = fileManager.read(this.fileName);
        long duration = this.stopwatch.getDurationInMicroseconds();
        logFinish("READING", duration);
        return value;
    }

    private void writeValue(String value){
        Random rand = new Random();
        int randomNumber = rand.nextInt(100);
        logStart("WRITING");
        this.stopwatch.start();
        fileManager.write(this.fileName, value+randomNumber+"}");
        long duration = this.stopwatch.getDurationInMicroseconds();
        logFinish("WRITING", duration);
    }

    private void logStart(String message){
        System.out.println("Start "+message+" \""+this.fileName+"\"");

    }
    private void logFinish(String message, long duration){
        System.out.println(message+" \""+this.fileName + "\" took > "+duration+" microseconds <");
    }

}
