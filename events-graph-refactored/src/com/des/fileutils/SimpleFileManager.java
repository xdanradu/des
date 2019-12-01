package com.des.fileutils;

import java.io.FileNotFoundException;
import java.io.PrintWriter;

public class SimpleFileManager extends  FileManager{
    public void write(String fileName, String value){
        try (PrintWriter out = new PrintWriter(fileName)) {
            out.println(value);
        } catch(FileNotFoundException e){
            System.out.println(e.getMessage());
        }
    }

}
