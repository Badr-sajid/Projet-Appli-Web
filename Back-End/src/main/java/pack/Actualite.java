package pack;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Actualite {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column( length = 1000000000 )
	private String text;
	
	private String titre;
	
	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private UrlDocument urlImage;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public UrlDocument getUrlImage() {
		return urlImage;
	}

	public void setUrlImage(UrlDocument urlImage) {
		this.urlImage = urlImage;
	}
}