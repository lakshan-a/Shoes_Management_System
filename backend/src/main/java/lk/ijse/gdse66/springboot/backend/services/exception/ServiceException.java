package lk.ijse.gdse66.springboot.backend.services.exception;

public class ServiceException extends RuntimeException{
    public ServiceException(String message) {
        super(message);
    }
}
