package lk.ijse.finalcoursework.shoeshop.api;

import jakarta.validation.Valid;
import lk.ijse.finalcoursework.shoeshop.dto.SalesDTO;
import lk.ijse.finalcoursework.shoeshop.service.SaleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/22/2024
 */

@RestController
@RequestMapping("api/v0/sales")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE,RequestMethod.PATCH, RequestMethod.OPTIONS})
public class SalesAPI {
    private final SaleService saleService;

    public SalesAPI(SaleService saleService) {
        this.saleService = saleService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    List<SalesDTO> getAllSales(){
        return saleService.getAllSales();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    SalesDTO saveSales(@Valid @RequestBody SalesDTO salesDTO){
        System.out.println(salesDTO);
        return saleService.saveSales(salesDTO);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    void updateSales(@Valid @RequestBody SalesDTO salesDTO){
        saleService.updateSales(salesDTO.getOrderNo(),salesDTO);
    }

    @DeleteMapping(value = "/{id}",consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    void deleteSales(@PathVariable("id") String id){
        saleService.deleteSales(id);
    }

    @PatchMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    SalesDTO getSales(@PathVariable("id") String id){
        return saleService.getSaleDetails(id);
    }

    @GetMapping("/nextordercode")
    @ResponseStatus(HttpStatus.ACCEPTED)
    String getNextOrderCode(){
        return saleService.nextOrderCode();
    }

    @GetMapping("/weeklyprofit")
    @ResponseStatus(HttpStatus.ACCEPTED)
    Map<String, Double> getWeeklyProfit(){
        return saleService.getWeeklyProfit();
    }

    @GetMapping("/monthlyprofit")
    @ResponseStatus(HttpStatus.ACCEPTED)
    Double getMonthlRevenue(){
        return saleService.getMonthlyRevenue();
    }
}
