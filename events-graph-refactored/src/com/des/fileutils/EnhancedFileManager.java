package com.des.fileutils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;

public class EnhancedFileManager extends FileManager{
    public void write(String fileName, String value) {
        try {
            PrintWriter writer = null;
            writer = new PrintWriter(new File(fileName));
            writer.write(value);
            writer.close();
        } catch (FileNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
    }
}
