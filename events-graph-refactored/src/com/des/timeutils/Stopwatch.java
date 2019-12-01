package com.des.timeutils;

import javafx.scene.paint.Stop;

public class Stopwatch {
    private long start;
    private long end;

    public Stopwatch(){
        this.start = 0;
        this.end = 0;
    }

    public void start(){
        this.start = System.nanoTime();
    }

    public long getDurationInMicroseconds(){
        return (System.nanoTime()- this.start) / 1000;
    }

}
