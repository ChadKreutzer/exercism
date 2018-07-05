using System;

public static class ReverseString
{
    public static string Reverse(string input)
    {
        var inputArray = input.ToCharArray();
        Array.Reverse(inputArray);
        return new string(inputArray);
    }
}