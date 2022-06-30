package projetoAgenda.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(schema = "curso",name = "responsavel")
@Entity
public class Processo {
    @Id
    @Column(name = "id")
    private Long id;
    @Column(name = "dt_abertura")
    private String dtAbertura;
    @Column(name = "num_proc")
    private Integer numProcesso;
    @Column(name = "ano_proc")
    private Integer anoProcesso;
    @Column(name = "modalidade")
    private String modalidade;
    @Column(name = "entidade")
    private String entidade;
    @Column(name = "situacao")
    private String situcao;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDtAbertura() {
        return dtAbertura;
    }

    public void setDtAbertura(String dtAbertura) {
        this.dtAbertura = dtAbertura;
    }

    public Integer getNumProcesso() {
        return numProcesso;
    }

    public void setNumProcesso(Integer numProcesso) {
        this.numProcesso = numProcesso;
    }

    public Integer getAnoProcesso() {
        return anoProcesso;
    }

    public void setAnoProcesso(Integer anoProcesso) {
        this.anoProcesso = anoProcesso;
    }

    public String getModalidade() {
        return modalidade;
    }

    public void setModalidade(String modalidade) {
        this.modalidade = modalidade;
    }

    public String getEntidade() {
        return entidade;
    }

    public void setEntidade(String entidade) {
        this.entidade = entidade;
    }

    public String getSitucao() {
        return situcao;
    }

    public void setSitucao(String situcao) {
        this.situcao = situcao;
    }
}
