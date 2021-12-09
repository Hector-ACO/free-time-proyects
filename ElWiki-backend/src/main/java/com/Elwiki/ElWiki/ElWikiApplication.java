package com.Elwiki.ElWiki;

import com.Elwiki.ElWiki.Property.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({FileStorageProperties.class})
public class ElWikiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ElWikiApplication.class, args);
	}

}
