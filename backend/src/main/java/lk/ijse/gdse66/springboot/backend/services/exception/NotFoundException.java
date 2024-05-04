package lk.ijse.gdse66.springboot.backend.services.exception;

public class NotFoundException extends ServiceException{
    public NotFoundException(String message) {
        super(message);
    }
}
