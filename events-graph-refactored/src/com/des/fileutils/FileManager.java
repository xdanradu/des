package com.des.fileutils;

import java.io.*;

public abstract class FileManager {

    public abstract void write(String fileName, String value);

    public String read(String fileName){
        String value = null;
        try {
            BufferedReader reader = new BufferedReader(new FileReader(fileName));
            value = reader.readLine();
        } catch(Exception e) {
            e.printStackTrace();
        }
        return value;
    }
}
