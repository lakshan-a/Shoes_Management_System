package lk.ijse.finalcoursework.shoeshop.api;

import lk.ijse.finalcoursework.shoeshop.dto.InventoryDTO;
import lk.ijse.finalcoursework.shoeshop.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/20/2024
 */

@RestController
@RequestMapping("api/v0/inventory")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE,RequestMethod.PATCH, RequestMethod.OPTIONS})
public class InventoryAPI {
    private final InventoryService inventoryService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    List<InventoryDTO> getAllInventory(){
        return inventoryService.getAllInventory();
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    InventoryDTO saveInventory(@RequestPart("data") InventoryDTO inventoryDTO,@RequestPart("itempic")MultipartFile itempic){
        String base64ProfilePic = null;
        try {
            base64ProfilePic = Base64.getEncoder().encodeToString(itempic.getBytes());
            inventoryDTO.setItemPicture(
                    base64ProfilePic
            );
        } catch (IOException e) {
            e.printStackTrace();
        }
        return inventoryService.saveInventory(inventoryDTO);
    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    void updateInventory(@RequestPart("data") InventoryDTO inventoryDTO,@RequestPart("itempic") MultipartFile itempic){
        String base64ProfilePic = null;
        try {
            base64ProfilePic = Base64.getEncoder().encodeToString(itempic.getBytes());
            inventoryDTO.setItemPicture(
                    base64ProfilePic
            );
        } catch (IOException e) {
            e.printStackTrace();
        }
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

    @GetMapping("/mostsaleitem")
    List<InventoryDTO> getMostSaleInvetory(){
        return inventoryService.getMostSaleItem();
    }
}
