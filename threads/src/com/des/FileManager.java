package com.des;

import java.io.*;

public class FileManager {
    public static void write(String fileName, String value) {
        try {
            PrintWriter writer = null;
            writer = new PrintWriter(new File(fileName));
            writer.write(value);
            writer.close();
        } catch (FileNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
    }

    public static String read(String fileName){
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
