using System;

public static class Leap
{
    public static bool IsLeapYear(int year)
    {
        /*
        on every year that is evenly divisible by 4
        except every year that is evenly divisible by 100
        unless the year is also evenly divisible by 400
        */
        var isLeap400 = year % 400 == 0;
        var isLeapOther = year % 4 == 0 && year % 100 != 0;
        return (isLeap400 || isLeapOther) ? true : false;
    }
}