package lk.ijse.gdse66.springboot.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/7/2024
 */

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Inventory {

    @Id
    @Column(name = "item_code", nullable = false)
    private String itemCode;

    @Column(name = "item_description", nullable = false)
    private String itemDescription;

    @Column(name = "item_picture", columnDefinition = "LONGTEXT")
    private String itemPicture;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "size", nullable = false)
    private Integer size;

    @Column(name = "supplier_code", nullable = false)
    private String supplierCode;

    @Column(name = "supplier_name", nullable = false)
    private String supplierName;

    @Column(name = "unit_price_sale", nullable = false)
    private Double unitPriceSale;

    @Column(name = "unit_price_buy", nullable = false)
    private Double unitPriceBuy;

    @Column(name = "expected_profit", nullable = false)
    private Double expectedProfit;


    @Column(name = "profit_margin", nullable = false)
    private Double profitMargin;
}
