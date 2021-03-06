package pack;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Demande implements Serializable {


	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@ManyToOne
	private Citoyen citoyen;
	private String typeDemande;
	private String estTraite;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Collection<UrlDocument> documents;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private DemandeCarteSejour demandeCarteSejour;
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private DemandePasseport demandePasseport;
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private DemandeImmatriculation demandeImmatriculation;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Citoyen getCitoyen() {
		return citoyen;
	}
	public void setCitoyen(Citoyen citoyen) {
		this.citoyen = citoyen;
	}
	public String getTypeDemande() {
		return typeDemande;
	}
	public void setTypeDemande(String typeDemande) {
		this.typeDemande = typeDemande;
	}
	public String getEstTraite() {
		return estTraite;
	}
	public void setEstTraite(String estTraite) {
		this.estTraite = estTraite;
	}
	public DemandeCarteSejour getDemandeCarteSejour() {
		return demandeCarteSejour;
	}
	public void setDemandeCarteSejour(DemandeCarteSejour demandeCarteSejour) {
		this.demandeCarteSejour = demandeCarteSejour;
	}
	public DemandePasseport getDemandePasseport() {
		return demandePasseport;
	}
	public void setDemandePasseport(DemandePasseport demandePasseport) {
		this.demandePasseport = demandePasseport;
	}
	public DemandeImmatriculation getDemandeImmatriculation() {
		return demandeImmatriculation;
	}
	public void setDemandeImmatriculation(DemandeImmatriculation demandeImmatriculation) {
		this.demandeImmatriculation = demandeImmatriculation;
	}
	public Collection<UrlDocument> getDocuments() {
		return documents;
	}
	public void setDocuments(Collection<UrlDocument> documents) {
		this.documents = documents;
	}

}
