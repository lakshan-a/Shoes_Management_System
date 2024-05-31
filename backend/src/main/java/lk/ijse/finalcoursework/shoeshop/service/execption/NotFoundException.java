package lk.ijse.finalcoursework.shoeshop.service.execption;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/18/2024
 */

public class NotFoundException extends ServiceException{
    public NotFoundException(String message) {
        super(message);
    }
}
