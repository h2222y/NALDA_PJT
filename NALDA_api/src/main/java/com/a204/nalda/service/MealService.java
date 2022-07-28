package com.a204.nalda.service;

import com.a204.nalda.domain.entity.airplane.Flight;
import com.a204.nalda.domain.entity.airplane.Seat;
import com.a204.nalda.domain.entity.airplane.SeatMeal;
import com.a204.nalda.domain.entity.inflightservice.Allergy;
import com.a204.nalda.domain.entity.inflightservice.Meal;
import com.a204.nalda.domain.entity.inflightservice.MealDetail;
import com.a204.nalda.domain.entity.inflightservice.MealStock;
import com.a204.nalda.domain.entity.user.User;
import com.a204.nalda.dto.meal.*;
import com.a204.nalda.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MealService {

    private final MealRepository mealRepository;
    private final MealStockRepository mealStockRepository;
    private final MealDetailRepository mealDetailRepository;
    private final AllergyRepository allergyRepository;
    private final SeatMealRepository seatMealRepository;

    @Transactional
    public List<MealDto> listMeal(){
        List<Meal> meals = mealRepository.findAll();
        List<MealDto> mealDto = new ArrayList<>();
        for (Meal meal : meals) {
            mealDto.add(MealDto.builder()
                            .imageName(meal.getImageName())
                            .mealMenu(meal.getMealMenu())
                            .build());
        }
        return mealDto;
    }

    public void mealCntInput(MealCntDto mealCntDto){

        Meal meal = Meal.builder()
                .id(mealCntDto.getMealId())
                .build();
        Flight flight = Flight.builder()
                .id(mealCntDto.getFlightId())
                .build();
        MealStock mealStock = MealStock.builder()
                .meal(meal)
                .flight(flight)
                .total(mealCntDto.getTotal())
                .build();

        mealStockRepository.save(mealStock);
    }

    @Transactional
    public List<MealDto> listInputMeal(Long flightId){
        List<Meal> mealList = mealRepository.findByFlightId(flightId);

        List<MealDto> mealDTOS = new ArrayList<>();

        for (Meal meal : mealList) {
            MealDto mealDto = MealDto.builder()
                    .mealMenu(meal.getMealMenu())
                    .imageName(meal.getImageName())
                    .build();
            mealDTOS.add(mealDto);
        }
        return mealDTOS;
    }

    @Transactional
    public List<MealDetailDto> listMealDetail(Long mealId){
        List<MealDetail> mealDetailList = mealDetailRepository.findByMeal(mealId);

        List<MealDetailDto> mealDetailDTOS = new ArrayList<>();

        for (MealDetail mealDetail : mealDetailList) {
            MealDetailDto mealDetailDto = MealDetailDto.builder()
                    .mealName(mealDetail.getMealName())
                    .build();
            mealDetailDTOS.add(mealDetailDto);
        }
        return mealDetailDTOS;
    }

    @Transactional
    public List<AllergyDto> listAllergy(Long mealId){
        List<Allergy> allergyList = allergyRepository.findByMeal(mealId);

        List<AllergyDto> allergyDTOS = new ArrayList<>();

        for (Allergy allergy : allergyList) {
            AllergyDto allergyDto = AllergyDto.builder()
                    .allergyType(allergy.getAllergyType())
                    .build();
            allergyDTOS.add(allergyDto);
        }
        return allergyDTOS;
    }


    public void seatMealInput(SeatMealDto seatMealDto){

        Meal meal = Meal.builder()
                .id(seatMealDto.getMealId())
                .build();
        Flight flight = Flight.builder()
                .id(seatMealDto.getFlightId())
                .build();
        User user = User.builder()
                .id(seatMealDto.getUserId())
                .build();
        Seat seat = Seat.builder()
                .id(seatMealDto.getSeatId())
                .build();
        SeatMeal seatMeal = SeatMeal.builder()
                .meal(meal)
                .flight(flight)
                .user(user)
                .seat(seat)
                .build();

        seatMealRepository.save(seatMeal);
    }




}