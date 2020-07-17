package edu.miu;

import javafx.application.Application;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class SimpleServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();

        out.print("<html>");
        out.print("<head>");
        out.print("<meta charset=\"UTF-8\">");
        out.print(" <title>Title</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("<form method='post'>");
        out.print("<div>");
        out.print("<input type=\"text\" name=\"input1\">");
        out.print("<span>+</span>");
        out.print("<input type=\"text\" name=\"input2\">");
        out.print("</div>");
        out.print("<div>");
        out.print("<input type=\"text\" name=\"input3\">");
        out.print("<span>*</span>");
        out.print("<input type=\"text\" name=\"input4\">");
        out.print("</div>");
        out.print("<input type=\"submit\" value=\"submit\">");
        out.print("</form>");
        out.print("</body>");
        out.print("</html>");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       String input1 = request.getParameter("input1");
       String input2 = request.getParameter("input2");
        boolean isSumValid = sum(input1, input2 );
        System.out.println(isSumValid);

        String input3 = request.getParameter("input3");
        String input4 = request.getParameter("input4");


        boolean isMultValid = product(input3, input4 );

        int sum = 0;

        int product = 0;
        PrintWriter out = response.getWriter();
        String responseResult = "<html><head><title>Test</title></head><body>";
        if(isSumValid) {
            int input11 = Integer.parseInt(input1);
            int input22 = Integer.parseInt(input2);
            sum = input11 + input22;
            responseResult += "<p>" + input1 + " + " + input2 + " = " + sum + "</p>";
        }

        if(isMultValid) {
            int input33 = Integer.parseInt(input3);
            int input44 = Integer.parseInt(input4);
            product = input33 * input44;
            responseResult += "<p>"+input33+ " * "+ input44 +  " = "+ product + "</p>";
        }
        responseResult += "</body></html>";

        out.print(responseResult);
    }

    private boolean sum(String input1, String input2) {
        if (input1 != "" && input2 != "") {
            return true;
        }
        return false;
    }
    private boolean product(String input1, String input2) {
        if (input1 != "" && input2 != "") {
            return true;
        }
        return false;
    }

}
