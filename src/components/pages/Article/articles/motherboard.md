The central piece to which all components connect.

###### Common Sizes
- E-ATX (Extended ATX)
- ATX
- micro-ATX
- mini-ITX

ATX: Advanced Technology eXtended
ITX: Information Technology eXtended

###### Motherboard Sockets
- Modern Intel CPUs mostly use Land Grid Array sockets, for which the pins are in the socket.
- Modern AMD CPUs mostly use Ball Grid Array sockets, for which the pins are on the chip.

###### Chipset
A chipset acts as a "communications hub" within the system. It dictates system compatability, and allows for additional system features such as overclocking.

Older arhcitectures split the chipset into a *Northbridge* and *Southbridge*:
- The *Northbridge*  was conncected directly to the CPU via the CPU via the **Front Side Bus** and handled data transfer between performance sensitive components, such as system memory and graphics cards.
	- The *Northbridge* was also known as the **Memory Controller Hub (MCH)** or the **Graphics Memory Controller Hub (GMCH)**
- The *Southbridge* was connected to the CPU via the northbridge, and handled data transfer between less performance sensitive components.
	- The *Southbridge* was named the **I/O Controller Hub** in Intel Chipsets, and the **Fusion Controller Hub** in AMD Chipsets.

Modern CPU architectures use a single integrated "chipset" as opposed to a distinct northbridge and southbridge split. Many former Northbridge functions are now implemented directly into the CPU.

External Sources:
[North And South Bridges Of A Motherboard: Explained – Tech.78 (wordpress.com)](https://srgtech78.wordpress.com/2019/01/25/north-and-south-bridges-of-a-motherboard-explained/)
[Techquickie: What is a Chipset as Fast as Possible](https://www.youtube.com/watch?v=8gfA3H5XTAE)