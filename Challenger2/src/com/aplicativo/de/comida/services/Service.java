package com.aplicativo.de.comida.services;

import java.util.List;

import com.aplicativo.de.comida.entities.dao.RestauranteDAO;
import com.aplicativo.de.comida.interfaces.InterfaceRestaurante;

public class Service implements InterfaceRestaurante{

	@Override
	public Integer getQtdByAdrTypeRange(String adr, String type, String range) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer getQtdByAdrTypeRangeRate(String adr, String type, String range, String rate) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer getQtdByAdrTypeRangeTime(String adr, String type, String range, String time) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<RestauranteDAO> getListByAdrTypeRangeRate(String adr, String type, String range, String rate) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<RestauranteDAO> getListByAdrTypeRangeTime(String adr, String type, String range, String time) {
		// TODO Auto-generated method stub
		return null;
	}

}
