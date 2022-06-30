package projetoAgenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;
import projetoAgenda.model.Processo;

@Repository
interface ProcessoRepository extends JpaRepository<Processo, Long>, QuerydslPredicateExecutor<Processo> {

}