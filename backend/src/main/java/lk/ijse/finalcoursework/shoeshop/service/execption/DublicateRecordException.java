package lk.ijse.finalcoursework.shoeshop.service.execption;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/20/2024
 */

public class DublicateRecordException extends ServiceException{
    public DublicateRecordException(String message) {
        super(message);
    }
}
