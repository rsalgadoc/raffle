package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
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
 * Country
 */
@Validated
@NotUndefined
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2025-08-11T23:57:49.439903428Z[GMT]")


public class Country   {
  @JsonProperty("name")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private String name = null;

  @JsonProperty("alpha-2")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private String alpha2 = null;

  @JsonProperty("alpha-3")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private String alpha3 = null;

  @JsonProperty("numeric")

  @JsonInclude(JsonInclude.Include.NON_ABSENT)  // Exclude from JSON if absent
  @JsonSetter(nulls = Nulls.FAIL)    // FAIL setting if the value is null
  private String numeric = null;


  public Country name(String name) { 

    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   **/
  
  @Schema(example = "Afghanistan", description = "")
  
  public String getName() {  
    return name;
  }



  public void setName(String name) { 
    this.name = name;
  }

  public Country alpha2(String alpha2) { 

    this.alpha2 = alpha2;
    return this;
  }

  /**
   * Get alpha2
   * @return alpha2
   **/
  
  @Schema(example = "AF", description = "")
  
  public String getAlpha2() {  
    return alpha2;
  }



  public void setAlpha2(String alpha2) { 
    this.alpha2 = alpha2;
  }

  public Country alpha3(String alpha3) { 

    this.alpha3 = alpha3;
    return this;
  }

  /**
   * Get alpha3
   * @return alpha3
   **/
  
  @Schema(example = "AFG", description = "")
  
  public String getAlpha3() {  
    return alpha3;
  }



  public void setAlpha3(String alpha3) { 
    this.alpha3 = alpha3;
  }

  public Country numeric(String numeric) { 

    this.numeric = numeric;
    return this;
  }

  /**
   * Get numeric
   * @return numeric
   **/
  
  @Schema(example = "4", description = "")
  
  public String getNumeric() {  
    return numeric;
  }



  public void setNumeric(String numeric) { 
    this.numeric = numeric;
  }

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Country country = (Country) o;
    return Objects.equals(this.name, country.name) &&
        Objects.equals(this.alpha2, country.alpha2) &&
        Objects.equals(this.alpha3, country.alpha3) &&
        Objects.equals(this.numeric, country.numeric);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, alpha2, alpha3, numeric);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Country {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    alpha2: ").append(toIndentedString(alpha2)).append("\n");
    sb.append("    alpha3: ").append(toIndentedString(alpha3)).append("\n");
    sb.append("    numeric: ").append(toIndentedString(numeric)).append("\n");
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
