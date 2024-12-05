#include <stdio.h>
#include <stdbool.h>
#include <string.h>

// #### Basic for C
// int main() {
//     int n = 90;
//     char letter = 'K';
//     char name[] = "joel";
//     bool status = 8 == 8;

//     printf("The integer is %d \n", n);
//     printf("The letter is %c \n", letter);
//     printf("The word is %s", name);
//     printf("%b", status);
// }


// #### Comparing strings
// int main() {
//     char name[] = "joel";
//     char user[10];
//     scanf("%9s", &user);
//     if (strcmp(user, name) == 0) {
//         printf("welcome name correct");
//     }else{
//         printf("name incorrect");
//     }
// }

int main() {
int choice = 2;

    switch (choice) {
        case 1:
            printf("You selected option 1\n");
            break;
        case 2:
            printf("You selected option 2\n");
            break;
        case 3:
            printf("You selected option 3\n");
            break;
        default:
            printf("Invalid option\n");
            break;
    }

    return 0;
}