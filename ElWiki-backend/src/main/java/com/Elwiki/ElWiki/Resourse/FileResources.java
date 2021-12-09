package com.Elwiki.ElWiki.Resourse;

import com.Elwiki.ElWiki.JPA.Base.IconRepository;
import com.Elwiki.ElWiki.JPA.Base.PortraitRepository;
import com.Elwiki.ElWiki.JPA.FirstClass.FirstClassIconRepository;
import com.Elwiki.ElWiki.JPA.FirstClass.PortraitFirstClassRepository;
import com.Elwiki.ElWiki.Model.Base.Icon;
import com.Elwiki.ElWiki.Model.Base.Portrait;
import com.Elwiki.ElWiki.Model.FirstClass.iconFirstClass;
import com.Elwiki.ElWiki.Model.FirstClass.portraitFirstClass;
import com.Elwiki.ElWiki.Service.Photo.FileStoreService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
@Slf4j
@RequestMapping("/file")
public class FileResources {
    @Autowired
    private FileStoreService fileStoreService;


    @Autowired
    PortraitRepository portraitRepository;

    @Autowired
    IconRepository iconRepository;

    @Autowired
    FirstClassIconRepository firstClassIconRepository;

    @Autowired
    PortraitFirstClassRepository portraitFirstClassRepository;

    @PostMapping("/portrait")
    public ResponseEntity portraitUpdate(@RequestParam("file") MultipartFile file, @RequestParam("id") long id) {

        try {
            String fileName = fileStoreService.storeFile(file);
            Portrait portrait=new Portrait();
           portrait.setIdCharacter(id);
           portrait.setPortrait(fileName);
           portraitRepository.save(portrait);
          log.info("Successfully");
            return ResponseEntity.ok(portrait);
        } catch (Exception z) {
            log.error(z.getMessage());
            return ResponseEntity.ok("error" +
                    z.getMessage());
        }
    }
    @PostMapping("/Icon")
    public ResponseEntity iconUpdate(@RequestParam("file") MultipartFile file, @RequestParam("id") long id) {

        try {
            String fileName = fileStoreService.storeFile(file);
            Icon icon=new Icon();
            icon.setIcon(fileName);
            icon.setIdCharacter(id);
            iconRepository.save(icon);
            log.info("Successfully");
            return ResponseEntity.ok(icon);
        } catch (Exception z) {
            log.error(z.getMessage());
            return ResponseEntity.ok("error" +
                    z.getMessage());
        }
    }
    @PostMapping("/FIcon")
    public ResponseEntity FirstClassiconUpdate(@RequestParam("file") MultipartFile file, @RequestParam("id") long id) {

        try {
            String fileName = fileStoreService.storeFile(file);
            iconFirstClass icon =new iconFirstClass();
            icon.setIcon(fileName);
            icon.setIdFirstClass(id);
            firstClassIconRepository.save(icon);
            log.info("Successfully");
            return ResponseEntity.ok(icon);
        } catch (Exception z) {
            log.error(z.getMessage());
            return ResponseEntity.ok("error" +
                    z.getMessage());
        }
    }
    @PostMapping("/Fportrait")
    public ResponseEntity FirstClassportraitUpdate(@RequestParam("file") MultipartFile file, @RequestParam("id") long id) {

        try {
            String fileName = fileStoreService.storeFile(file);
            portraitFirstClass portrait=new portraitFirstClass();
            portrait.setIdFirstClass(id);
            portrait.setPortrait(fileName);
            portraitFirstClassRepository.save(portrait);
            log.info("Successfully");
            return ResponseEntity.ok(portrait);
        } catch (Exception z) {
            log.error(z.getMessage());
            return ResponseEntity.ok("error" +
                    z.getMessage());
        }
    }

    @GetMapping("/download/{fileName:.+}")
    public ResponseEntity dowloandFile(@PathVariable String fileName, HttpServletRequest request) {

        Resource resource = fileStoreService.loadFileAsResource(fileName);
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            log.info("Could not determine file type." + ex.getMessage());
        }
        if (contentType == null) {
            contentType = "application/octet-stream";
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);

    }
}
