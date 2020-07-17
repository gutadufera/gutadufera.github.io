package edu.MIU;

import sun.management.jdp.JdpException;

import java.io.IOException;

public class Label extends  SimpleTagSupport{
    String foreColor;
    String text;
    public  void doTag() throws JdpException, IOException {
        JspWriter out = getJspContext().getOut();

    }

}
