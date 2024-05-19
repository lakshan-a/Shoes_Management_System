package lk.ijse.gdse66.springboot.backend.api;

import lk.ijse.gdse66.springboot.backend.dto.InventoryDTO;
import lk.ijse.gdse66.springboot.backend.services.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/7/2024
 */
@RestController
@RequestMapping("/inventory")
@RequiredArgsConstructor
public class InventoryController {

    private final InventoryService inventoryService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    List<InventoryDTO> getAllInventory(){
        return inventoryService.getAllInventory();
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    InventoryDTO saveInventory(@RequestPart("data") InventoryDTO inventoryDTO,@RequestPart("itempic")String itempic){
        String base64ProfilePic = Base64.getEncoder().encodeToString(itempic.getBytes());
        inventoryDTO.setItemPicture(
                base64ProfilePic
        );
        return inventoryService.saveInventory(inventoryDTO);
    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    void updateInventory(@RequestPart("data") InventoryDTO inventoryDTO,@RequestPart("itempic")String itempic){
        String base64ProfilePic = Base64.getEncoder().encodeToString(itempic.getBytes());
        inventoryDTO.setItemPicture(
                base64ProfilePic
        );
        inventoryService.updateInventory(inventoryDTO.getItemCode(),inventoryDTO);
    }

    @DeleteMapping(value = "/{id}",consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    void deleteInventory(@PathVariable("id") String itemCode){
        inventoryService.deleteInventory(itemCode);
    }

    @PatchMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    InventoryDTO getInventory(@PathVariable("id") String id){
        return inventoryService.getInventoryDetails(id);
    }



}
