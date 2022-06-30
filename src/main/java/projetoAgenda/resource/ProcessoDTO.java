package projetoAgenda.resource;

import projetoAgenda.model.Processo;

public class ProcessoDTO {

    private Long id;
    private String dtAbertura;
    private Integer numProcesso;
    private Integer anoProcesso;
    private String modalidade;
    private String entidade;
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

    public static ProcessoDTO toDTO(Processo processo) {
        ProcessoDTO dto = new ProcessoDTO();
        dto.setId(processo.getId());
        dto.setDtAbertura(processo.getDtAbertura());
        dto.setNumProcesso(processo.getNumProcesso());
        dto.setAnoProcesso(processo.getAnoProcesso());
        dto.setModalidade(processo.getModalidade());
        dto.setEntidade(processo.getEntidade());
        dto.setSitucao(processo.getSitucao());
        return dto;
    }

    public static Processo fromDTO(ProcessoDTO dto){
        Processo entity = new Processo();
        entity.setId(dto.getId());
        entity.setDtAbertura(dto.getDtAbertura());
        entity.setNumProcesso(dto.getNumProcesso());
        entity.setAnoProcesso(dto.getAnoProcesso());
        entity.setModalidade(dto.getModalidade());
        entity.setEntidade(dto.getEntidade());
        entity.setSitucao(dto.getSitucao());
        return entity;
    }
}
