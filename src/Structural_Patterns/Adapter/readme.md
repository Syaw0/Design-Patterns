# Adapter Pattern


The Adapter is a design pattern
that allows two incompatible
classes to work together by
acting as a bridge between them.
In simpler terms, sometimes
you might encounter a scenario
where you have an existing
class or set of classes that has
a particular interface, but you
want to use these classes in a
new context where they don't
quite fit. Instead of modifying
the existing code, the Adapter
pattern enables you to create
a new class that knows how to
interface with the existing code,
and then use that new class in
the new context.


To achieve this, the Adapter
pattern typically involves
creating an adapter class that
implements the desired interface
that the new client code expects.
This adapter class then contains
an instance of the existing class
that it can delegate calls to,
translating or adapting its APIs
as required.
The Adapter pattern is
particularly useful in situations
where you are working with
legacy code, external libraries, or
other situations where making
changes to the original code is
impractical or not allowed.
