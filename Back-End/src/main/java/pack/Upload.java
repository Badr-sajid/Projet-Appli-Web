package pack;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
/* The Java file upload Servlet example */

@WebServlet(name = "Upload", urlPatterns = { "/Upload" })
@MultipartConfig(
  fileSizeThreshold = 1024 * 1024 * 1, // 1 MB
  maxFileSize = 1024 * 1024 * 10,      // 10 MB
  maxRequestSize = 1024 * 1024 * 100   // 100 MB
)
public class Upload extends HttpServlet {

  /**
     * 
     */
    private static final long serialVersionUID = 1L;

public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    /* Receive file uploaded to the Servlet from the HTML5 form */
    String Id = request.getParameter("id");
    try {
    for (Part part : request.getParts()) {
        String fileName = part.getSubmittedFileName();
        part.write("/Users/badrsajid/Desktop/dossier sans titre 3/Upload/"+Id+"-"+fileName);
    }
    
    } catch (Exception e){
        // ça va bien merci
    } finally {
        response.sendRedirect("http://localhost:3000/Redirection?id="+Id); 
    }
  }

}