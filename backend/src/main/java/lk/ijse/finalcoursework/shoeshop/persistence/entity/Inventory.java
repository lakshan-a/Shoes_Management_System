package lk.ijse.finalcoursework.shoeshop.persistence.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/18/2024
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "inventory")
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

    @Column(name = "size")
    private Integer size;

    @ManyToOne
    @JoinColumn(name = "supplier_code" , referencedColumnName = "supplier_code")
    private Supplier supplier;

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

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "p_quantity", nullable = false)
    private Integer pQuantity;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy =  "inventory")
    private List<SalesDetails> salesDetails = new ArrayList<>();
}
