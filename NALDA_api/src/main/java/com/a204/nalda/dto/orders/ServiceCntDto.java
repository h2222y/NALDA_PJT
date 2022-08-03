package com.a204.nalda.dto.orders;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServiceCntDto {

    private String flightNum;
    private String serviceCode;
    private int total;


}
