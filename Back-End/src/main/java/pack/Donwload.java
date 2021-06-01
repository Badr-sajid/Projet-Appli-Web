package pack;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "Download", urlPatterns = { "Download" })
public class Donwload extends HttpServlet {


/**
     * 
     */
    private static final long serialVersionUID = 1L;

public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    String filename = request.getParameter("file");
    String filepath = "/Users/badrsajid/Desktop/dossier sans titre 3/Upload/";
    String name = filepath+filename;
    
    File file = new File(name);
    FileInputStream inStream = new FileInputStream(file);
     
    // obtains ServletContext
    ServletContext context = getServletContext();
    String mType = context.getMimeType(name);
    if (mType == null) {        
        // set to binary type if MIME mapping not found
        mType = "application/octet-stream";
    }

    
    // modifies response
    response.setContentType(mType);
    response.setContentLength((int) file.length());
     
    // forces download
    String headerKey = "Content-Disposition";
    String headerValue = String.format("attachment; filename=\"%s\"", file.getName());
    response.setHeader(headerKey, headerValue);
     
    // obtains response's output stream
    OutputStream outStream = response.getOutputStream();
     
    byte[] buffer = new byte[4096];
    int bytesRead = -1;
     
    while ((bytesRead = inStream.read(buffer)) != -1) {
        outStream.write(buffer, 0, bytesRead);
    }
     
    inStream.close();
    outStream.close(); 
    

  }

}