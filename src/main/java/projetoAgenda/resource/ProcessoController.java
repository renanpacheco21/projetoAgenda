package projetoAgenda.resource;

import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import projetoAgenda.model.Processo;
import projetoAgenda.repository.ProcessoRepository;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/processo")
public class ProcessoController {
    @Autowired
    private ProcessoRepository repository;

    @GetMapping
    public List<ProcessoDTO> getProcesso(@QuerydslPredicate(root = Processo.class) Predicate predicate){
        List<ProcessoDTO> result = new ArrayList<>();
        Iterable<Processo> all = repository.findAll(predicate);
        all.forEach(f -> result.add(ProcessoDTO.toDTO(f)));
        return result;
    }

    @GetMapping("/{id}")
    public ProcessoDTO getProcessoId(@PathVariable(value = "id") Long processoId) throws EntityNotFoundException {
        Processo processoFind = repository.findById(processoId).orElseThrow(() -> new EntityNotFoundException("Processo não encontado com o ID" + processoId));
        return ProcessoDTO.toDTO(processoFind);
    }

    @PostMapping
    public ProcessoDTO create(@Valid @RequestBody Processo processo){
        return ProcessoDTO.toDTO(repository.save(processo));
    }

//    @PutMapping("/{id}")
//    public ProcessoDTO update(@PathVariable(value = "id") Long responsavelId,
//                                 @RequestBody Processo responsavel) throws EntityNotFoundException {
//        Processo responsavelFind = repository.findById(responsavelId).orElseThrow(() -> new EntityNotFoundException("Responsável não encontrado com ID :: " +responsavelId));
//        responsavelFind.setId(responsavel.getId());
//        responsavelFind.setNome(responsavel.getNome());
//        responsavelFind.setPopulacao(responsavel.getPopulacao());
//        return ProcessoDTO.toDTO(repository.save(responsavelFind));
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable(value = "id") Long processoId) throws EntityNotFoundException{
        Processo processoFind = repository.findById(processoId).orElseThrow(() -> new EntityNotFoundException("Processo não encontrado com o ID::" + processoId));
        repository.delete(processoFind);
        return ResponseEntity.noContent().build();
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}