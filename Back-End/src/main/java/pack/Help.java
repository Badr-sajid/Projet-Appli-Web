package pack;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Help {

	@Id
	private int id;
	private String annontation;
	private String path;
	private String nom;
	private String type;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAnnontation() {
		return annontation;
	}
	public void setAnnontation(String annontation) {
		this.annontation = annontation;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getType() {
		return type;
	}
	public void setType(String class1) {
		this.type = class1;
	}
	
	
}
