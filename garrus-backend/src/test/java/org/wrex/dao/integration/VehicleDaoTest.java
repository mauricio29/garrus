package org.wrex.dao.integration;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.wrex.Application;
import org.wrex.vehicles.Vehicle;
import org.wrex.vehicles.VehicleRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class VehicleDaoTest {

	@Autowired
	VehicleRepository userDao;

	@Test
	public void createUser() {
		Vehicle test = new Vehicle();
		test.setPlate("XXXX-22");
		userDao.save(test);
		Assert.assertEquals(5, userDao.count());
	}

	@Test
	public void getAll() {
		Assert.assertEquals(4, userDao.count());
	}
}