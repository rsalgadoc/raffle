package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.model.Country;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.validation.annotation.Validated;
import org.openapitools.jackson.nullable.JsonNullable;
import io.swagger.configuration.NotUndefined;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Raffle
 */
@Validated
@NotUndefined
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2025-08-11T23:57:49.439903428Z[GMT]")


public class Raffle   {
  @JsonProperty("id")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private Long id = null;

  @JsonProperty("name")

  private String name = null;

  @JsonProperty("description")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private String description = null;

  @JsonProperty("prize")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private String prize = null;

  @JsonProperty("drawDate")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private String drawDate = null;

  @JsonProperty("drawTime")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private String drawTime = null;

  @JsonProperty("country")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private Country country = null;

  /**
   * raffle status
   */
  public enum StatusEnum {
    ACTIVE("active"),
    
    UPCOMING("upcoming"),
    
    PAST("past");

    private String value;

    StatusEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static StatusEnum fromValue(String text) {
      for (StatusEnum b : StatusEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }
  @JsonProperty("status")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private StatusEnum status = null;

  @JsonProperty("imageUrl")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private String imageUrl = null;

  @JsonProperty("participationPeriod")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private String participationPeriod = null;

  @JsonProperty("rulesUrl")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private String rulesUrl = null;


  public Raffle id(Long id) { 

    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   **/
  
  @Schema(example = "10", accessMode = Schema.AccessMode.READ_ONLY, description = "")
  
  public Long getId() {  
    return id;
  }



  public void setId(Long id) { 
    this.id = id;
  }

  public Raffle name(String name) { 

    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   **/
  
  @Schema(example = "Sorteo de Verano", required = true, description = "")
  
  @NotNull
  public String getName() {  
    return name;
  }



  public void setName(String name) { 

    this.name = name;
  }

  public Raffle description(String description) { 

    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   **/
  
  @Schema(example = "Discover and join the latest raffles. Your luck awaits!", description = "")
  
  public String getDescription() {  
    return description;
  }



  public void setDescription(String description) { 
    this.description = description;
  }

  public Raffle prize(String prize) { 

    this.prize = prize;
    return this;
  }

  /**
   * Get prize
   * @return prize
   **/
  
  @Schema(example = "Barbacoa de alta gama, set de sillas de playa y nevera portátil.", description = "")
  
  public String getPrize() {  
    return prize;
  }



  public void setPrize(String prize) { 
    this.prize = prize;
  }

  public Raffle drawDate(String drawDate) { 

    this.drawDate = drawDate;
    return this;
  }

  /**
   * Get drawDate
   * @return drawDate
   **/
  
  @Schema(example = "2025-08-15", description = "")
  
  public String getDrawDate() {  
    return drawDate;
  }



  public void setDrawDate(String drawDate) { 
    this.drawDate = drawDate;
  }

  public Raffle drawTime(String drawTime) { 

    this.drawTime = drawTime;
    return this;
  }

  /**
   * Get drawTime
   * @return drawTime
   **/
  
  @Schema(example = "20:00", description = "")
  
  public String getDrawTime() {  
    return drawTime;
  }



  public void setDrawTime(String drawTime) { 
    this.drawTime = drawTime;
  }

  public Raffle country(Country country) { 

    this.country = country;
    return this;
  }

  /**
   * Get country
   * @return country
   **/
  
  @Schema(description = "")
  
@Valid
  public Country getCountry() {  
    return country;
  }



  public void setCountry(Country country) { 
    this.country = country;
  }

  public Raffle status(StatusEnum status) { 

    this.status = status;
    return this;
  }

  /**
   * raffle status
   * @return status
   **/
  
  @Schema(description = "raffle status")
  
  public StatusEnum getStatus() {  
    return status;
  }



  public void setStatus(StatusEnum status) { 
    this.status = status;
  }

  public Raffle imageUrl(String imageUrl) { 

    this.imageUrl = imageUrl;
    return this;
  }

  /**
   * Get imageUrl
   * @return imageUrl
   **/
  
  @Schema(example = "/images/twitter-logo.png", description = "")
  
  public String getImageUrl() {  
    return imageUrl;
  }



  public void setImageUrl(String imageUrl) { 
    this.imageUrl = imageUrl;
  }

  public Raffle participationPeriod(String participationPeriod) { 

    this.participationPeriod = participationPeriod;
    return this;
  }

  /**
   * Get participationPeriod
   * @return participationPeriod
   **/
  
  @Schema(example = "1 de Julio a 14 de Agosto", description = "")
  
  public String getParticipationPeriod() {  
    return participationPeriod;
  }



  public void setParticipationPeriod(String participationPeriod) { 
    this.participationPeriod = participationPeriod;
  }

  public Raffle rulesUrl(String rulesUrl) { 

    this.rulesUrl = rulesUrl;
    return this;
  }

  /**
   * Get rulesUrl
   * @return rulesUrl
   **/
  
  @Schema(example = "#", description = "")
  
  public String getRulesUrl() {  
    return rulesUrl;
  }



  public void setRulesUrl(String rulesUrl) { 
    this.rulesUrl = rulesUrl;
  }

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Raffle raffle = (Raffle) o;
    return Objects.equals(this.id, raffle.id) &&
        Objects.equals(this.name, raffle.name) &&
        Objects.equals(this.description, raffle.description) &&
        Objects.equals(this.prize, raffle.prize) &&
        Objects.equals(this.drawDate, raffle.drawDate) &&
        Objects.equals(this.drawTime, raffle.drawTime) &&
        Objects.equals(this.country, raffle.country) &&
        Objects.equals(this.status, raffle.status) &&
        Objects.equals(this.imageUrl, raffle.imageUrl) &&
        Objects.equals(this.participationPeriod, raffle.participationPeriod) &&
        Objects.equals(this.rulesUrl, raffle.rulesUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, description, prize, drawDate, drawTime, country, status, imageUrl, participationPeriod, rulesUrl);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Raffle {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    prize: ").append(toIndentedString(prize)).append("\n");
    sb.append("    drawDate: ").append(toIndentedString(drawDate)).append("\n");
    sb.append("    drawTime: ").append(toIndentedString(drawTime)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    imageUrl: ").append(toIndentedString(imageUrl)).append("\n");
    sb.append("    participationPeriod: ").append(toIndentedString(participationPeriod)).append("\n");
    sb.append("    rulesUrl: ").append(toIndentedString(rulesUrl)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
