#include<iostream>
using namespace std;

int main()
{
    long long int fact = 1;
    int i = 2;
    cout<<fact;
    while(i < 101)
    {
        fact *= i;
        cout<<endl<<fact;
        i++;
    }
    cout<<endl<<fact;
    return 0;
}
