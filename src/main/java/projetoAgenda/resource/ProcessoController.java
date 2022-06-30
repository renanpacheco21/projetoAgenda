package projetoAgenda.resource;

import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import projetoAgenda.repository.ProcessoRepository;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/responsavel")
public class ProcessoController {
    @Autowired
    private ProcessoRepository repository;

    @GetMapping
    public List<ResponsavelDTO> getResponsavel(@QuerydslPredicate(root = Responsavel.class) Predicate predicate){
        List<ResponsavelDTO> result = new ArrayList<>();
        Iterable<Responsavel> all = repository.findAll(predicate);
        all.forEach(f -> result.add(ResponsavelDTO.toDTO(f)));
        return result;
    }

    @GetMapping("/{id}")
    public ResponsavelDTO getResponsavelsId(@PathVariable(value = "id") Long responsavelId) throws EntityNotFoundException {
        Responsavel responsavelFind = repository.findById(responsavelId).orElseThrow(() -> new EntityNotFoundException("Responsável não encontado com o ID" +responsavelId));
        return ResponsavelDTO.toDTO(responsavelFind);
    }

    @PostMapping
    public ResponsavelDTO create(@Valid @RequestBody Responsavel responsavel){
        return ResponsavelDTO.toDTO(repository.save(responsavel));
    }

    @PutMapping("/{id}")
    public ResponsavelDTO update(@PathVariable(value = "id") Long responsavelId,
                                 @RequestBody Responsavel responsavel) throws EntityNotFoundException {
        Responsavel responsavelFind = repository.findById(responsavelId).orElseThrow(() -> new EntityNotFoundException("Responsável não encontrado com ID :: " +responsavelId));
        responsavelFind.setId(responsavel.getId());
        responsavelFind.setNome(responsavel.getNome());
        responsavelFind.setPopulacao(responsavel.getPopulacao());
        return ResponsavelDTO.toDTO(repository.save(responsavelFind));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable(value = "id") Long responsavelId) throws EntityNotFoundException{
        Responsavel responsavelFind = repository.findById(responsavelId).orElseThrow(() -> new EntityNotFoundException("Responsável não encontrado com o ID::" +responsavelId));
        repository.delete(responsavelFind);
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